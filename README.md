<p align="center">
  <a href="http://lycostu.lycoming.edu/orgs/sps/">
    <img alt="Lyco SPS" src="src/images/spslogo.svg" width="150" />
  </a>
</p>
<h1 align="center">
  SPS Lycoming Website Source Code
</h1>

Author: [Sylphrena Kleinsasser](https://github.com/sylphrena0)

## **Project Overview:**

This repository contains the source code for the Lycoming SPS Chapter Website. The website is built with React and Gatsby. To update the website, you will need to clone the repository, install requisite packages, update the code, and deploy a build.

Note that the website is optimized for non-experienced webmasters. Most content is pulled from the SPS Google Drive, so you should not need to update the website more than once a year, unless someone on the executive board is replaced, or if you wish to make design changes or improvements.

To update the content on the drive, login with the credentials provided by the previous executive board and navigate [here](https://drive.google.com/drive/u/1/folders/1D4Q25XZxy-GI1az26JrxDCQg3QSskk3K). Once you finish your responsibilities for the year, you should make a copy of all the documents to archive in the `Archived` subfolder. This is a tradition from well before my time as webmaster. 

## **Development Instructions:**


1.  **Install Dependencies**

    - Open a terminal window and install npm with `apt install npm` (or use your distro's package manager). If you are on Windows, run the [Node.js installer](https://nodejs.org/en/download/) instead. 
    
    - Next, in your terminal, install yarn and gatsby-cli with `npm install -g yarn gatsby-cli`. This will allow you to manage packages with yarn and run gatsby commands anywhere on your device.

1. **Clone Repository**
    
    Run these commands, which insert your information into the git config:
    
    ```bash
    git config --global user.name "FirstName LastName"
    git config --global user.email "example@example.com"
    git config --global user.password "AccessToken" 
    git config --global credential.helper store
    ```
    Your password should not be your account password, but an access token. You can generate an access token by navigating to GitHub Settings > Developer Settings > Personal Access Tokens > Tokens > Generate New Token (classic). Note, to push changes to this repository, you'll need access. Contact me or the previous webmaster to be given write access to this repository.

    Next, we will clone this repository. 

    ```bash
    git clone https://github.com/sylphrena0/lycospswebsite /base/directory/to/store/project
    ```

1. **Test Website**
  
    You should see the website files populated in the directory you specified. Open the directory in your favorite code editor (I recommend [Visual Studio Code](https://code.visualstudio.com/) and will assume you are using it.).

    Open the integrated terminal in VsCode with `Ctrl + J`. Execute this command:
    ```bash

    yarn start # runs a development site where you can view website changes in real time
    ```

    If this works, you are ready to start editing!

1. **Updating Content**

    There are several files you may wish to update each year.

    - **Updating [/src/sections/ExecBoard.ts](/src/sections/ExecBoard.ts)**
      - Update all the names under each position, this should be pretty self-explainitory.
      - Next, get headshots of all current Executive Board Members and crop them to be a square aspect ratio.
      - Convert all images to .webp for fast loading. You can use a tool like [CloudConvert](https://cloudconvert.com/jpg-to-webp).
      - Rename all images to the executive board position title, all lowercase. Replace the images in [/src/images/execboard/](/src/images/execboard/) with the new images. You're done!
    
    <br>
  
    - **Changing About Us Images ([/src/sections/AboutUs.ts](/src/sections/ExecBoard.ts))**
      - Update these images with photos that reflect the current community in our chapter.
      - Copy any photos that you want to use into [/src/images/](/src/images/). Again, webp images are preferred.
      - Update the url of each photo at the top of [AboutUs.ts](/src/sections/ExecBoard.ts). You don't need to update the name, unless you decide to highlight different events.
        - Alternatively, you could keep the naming scheme of the current images and replace old images.
        - If you do change the name, change it at the top of the file and at where it is referenced below.

    <br>

    - **Updating [/src/sections/History.ts](/src/sections/History.ts)**
      - If you wish to update the content of the embed, use the google drive.
      - Otherwise, simply edit the text. You shouldn't need to do this unless there is an advisor change.

    <br>


    - **Updating [/src/sections/Footer.ts](/src/sections/Footer.ts)****
      - The copyright date in the footer automatically updates every time you compile a build.
      - To update links, just replace the `<Link>` or `<a href="">` elements. 
        - Link elements should be used for all links that reference pages on this site. Either should work for external references.

    <br>

    - **Updating the site path prefix**
      - An important note, if the website path prefix changes, you will need to change the links used by Gatsby, or the website will not display properly.
      - The path prefix of the website is the path from `www.lycoming.edu/` to `www.lycoming.edu/orgs/sps/`, which is `/orgs/sps/`. If the student organizations can move to a url like `www.sps.lycoming.edu/`, no prefix is required.
      - To modify the prefix, open [/gatsby-config.ts](/gatsby-config.ts) and modify the line that starts with `pathPrefix`. If a prefix is no longer require, you can comment out that line.
      - Before building, execute this command:
        ```bash
        gatsby clean
        ```
        This will clear caches and delete the output, ensuring the change will take effect on the next build.

    <br>

1. **Deploying Updates**

    Once you've finished updating the content, you can build the website. If you've made any major changes, execute `gatsby clean` in your terminal before continuing.

    To compile the updated website, run this command in the terminal:
    ```bash
    gatsby build --prefix-paths
    ```
    If the website is at the base url and does not have a prefix path, you can omitt the `--prefix-paths` flag.

    Gatsby should create [/public/](/public/), which you should copy onto the Lycoming Site directory, overwriting any conflicts. 
      - Note: don't delete the content in the drive and copy the new files. The live version contains backups from before our migration to React, photos used by the History embed, and a copy of [/static/SigmaPiSigmaFetch.ts](/static/SigmaPiSigmaFetch.ts) in [/public/sigmapisigma/](/public/sigmapisigma/), which fixes an error in the build.

    The updates should display on the website. You can refresh the site without caching by refreshing your browser with `Ctrl + Shift + R`. 
    
    Push any updates to GitHub for future webmasters. VsCode has build-in git support, just open the source control tab with`Ctrl + Shift + G`, enter your commit message, hit commit, then sync to send your updates to GitHub. Ensure you never comitt your credentials to this repository, as it is public.

## **Detailed Project Overview:**

Section will be added at a later point.

## **Project Structure:**

Section will be added at a later point.

## **Acknowledgments:**

This project used templates as a starting point of some pages. It also uses various services and libraries which will not be noted here, as they are meant for reuse and mentioned in the project overview. 

The Home Page and Footer was based off on [a template by Brian Codex](https://github.com/briancodex/react-website-v1). The [starry background](src/sections/Stars.scss) is based on [this SASS codepen](https://codepen.io/sarazond/pen/LYGbwj). Note that the Executive Board Cards were ported from the previous version of this website and the original source is unknown, though they were modified and adapted for react.

The Sigma Pi Sigma, Colloquium, Photos, Contact, and History pages were written by [Sylphrena Kleinsasser](https://github.com/sylphrena0), some of which use external libraries and embeds.
