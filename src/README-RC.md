Create the new repository on GitHub

Create the new folder on your local machine with the same name

Open the folder with your code editor and open the terminal

Initialize git ('git init')

Link your online repository ('git remote add origin gitHubLink')

Create your file structure 
    mkdir + folderName: creates a new folder within the folder (e.g. 'mkdir src' will create the src folder) 
    touch + fileName: creates a new file within the folder 
    touch .gitignore will create the file 'gitignore' in the main folder 
    touch src/db.js will create the file 'db.js' within the src sub-folder 
    touch src/Model.js will create the file 'db.js' within the src sub-folder 
    touch src/index.js will create the file 'db.js' within the src sub-folder 
    
    you can create multiple files at once by leaving a space between the different file names: 
        touch .gitignore src/db.js src/Model.js src/index.js

With your basic structure created, you can now do your initial push
    git add . 
    git commit -m 'basic files and folder structure' 
    git push --set-upstream origin master (or main)

It is good practice to work on your own branch rather than on the master/main branch
    git checkout -b whateverBranchName

We then need to allow the project to be able to handle packages
    npm init -y

We further need to install the libraries we are going to use. For this project, sequelize and sqlite3. Thus: 
    npm i sequelize sqlite3

Lastly, we want to add to the file gitignore any files that we don't want to be pushed to git. In this project we will add:
    /node_modules - as this is something that can be obtained through the libraries and would mean over 3k files to be uploaded