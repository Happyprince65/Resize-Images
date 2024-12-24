# Image Layering Tool (Node.js)

This Node.js script processes images within a specified folder, redrawing each image onto a canvas and saving it as a new PNG file. It's a simple tool for image manipulation, particularly useful for tasks like preparing image layers for generative art projects or basic image resizing.

## Features

*   **Batch Processing:** Processes all images within a given directory.
*   **Canvas Redrawing:** Redraws each image onto a 1024x1024 canvas.
*   **PNG Output:** Saves the processed images as PNG files.

## Prerequisites

*   **Node.js:** Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm (Node Package Manager) or yarn:** npm is included with Node.js. Yarn is an alternative package manager you can install separately.
*   **Canvas Package:** This script relies on the `canvas` package, which has native dependencies. Ensure you have the necessary build tools for your operating system. See the [node-canvas documentation](https://www.npmjs.com/package/canvas) for detailed installation instructions. Common issues on Windows require installing Python and Visual Studio Build Tools.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Happyprince65/Resize-all-Images-in-a-folder-nft-traits.git
   
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

1.  **Prepare your images:** Place the images you want to process in a folder named `sampleFolder` inside an `images` directory in the root of your project. The directory structure should look like this:

    ```
    your-project/
    ├── images/
    │   └── sampleFolder/
    │       ├── image1.png
    │       ├── image2.jpg
    │       └── ...
    ├── index.js
    ├── package.json
    └── ...
    ```

2.  **Run the script:**

    ```bash
    node index.js
    ```

    The script will iterate through each image in the `sampleFolder`, redraw it onto a 1024x1024 canvas, and save the new PNG files back into the `sampleFolder` directory, overwriting the original files.

## Code Explanation

*   `fs`: Node.js file system module for file operations.
*   `canvas`: Node.js canvas implementation for image manipulation.
*   `original`: Path to the input image folder.
*   `Length`, `width`: Dimensions of the canvas (1024x1024).
*   `fs.readdir`: Reads the contents of the image directory.
*   `drawLayer`: Asynchronous function that loads an image, draws it onto a canvas, and saves the canvas to a file.
*   `saveLayer`: Saves the canvas as a PNG file.

## Troubleshooting

*   **Canvas Installation Issues:** If you encounter errors during the `canvas` installation, refer to the [node-canvas documentation](https://www.npmjs.com/package/canvas) for platform-specific instructions. This is the most common source of problems.
*   **File Permissions:** Ensure that the script has the necessary read/write permissions for the input and output directories.

## Contributing

Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.
