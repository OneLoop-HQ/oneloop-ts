#!/bin/bash

# Check if package.json exists
if [ ! -f package.json ]; then
    echo "Error: package.json not found in the current directory"
    exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is not installed. Please install it to run this script."
    exit 1
fi

# Read the content of package.json
content=$(cat package.json)

# Check if the content is valid JSON
if ! echo "$content" | jq empty; then
    echo "Error: package.json is not valid JSON"
    exit 1
fi

# Check if 'files' key exists and is an array
if jq -e '.files | type == "array"' package.json > /dev/null; then
    echo "'files' key already exists as an array in package.json"
elif jq -e '.files' package.json > /dev/null; then
    echo "Error: 'files' key exists but is not an array"
    exit 1
else
    # Add 'files' key with value ["dist"]
    temp_file=$(mktemp)
    jq '. + {"files": ["dist"]}' package.json > "$temp_file"
    if [ $? -ne 0 ]; then
        echo "Error occurred while updating package.json"
        rm "$temp_file"
        exit 1
    fi
    mv "$temp_file" package.json
    echo "Added 'files' key with value [\"dist\"] to package.json"
fi

# Validate the final JSON structure
if ! jq empty package.json > /dev/null 2>&1; then
    echo "Error: The resulting package.json is not valid JSON"
    exit 1
fi

echo "package.json has been successfully updated and validated"