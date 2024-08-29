### Git Cheat Sheet

#### **Setup & Configuration**

- **`git config --global user.name "Your Name"`**: Sets the name you want attached to your commit transactions.
- **`git config --global user.email "your_email@example.com"`**: Sets the email you want attached to your commit transactions.
- **`git config --global color.ui auto`**: Enables helpful colorization of command line output.

#### **Creating Repositories**

- **`git init`**: Initializes a new Git repository in the current directory.
- **`git clone [url]`**: Downloads a repository from a URL to your local machine.

#### **Basic Snapshotting**

- **`git add [file]`**: Adds a file to the staging area.
- **`git add .`**: Adds all files in the current directory to the staging area.
- **`git status`**: Displays the state of the working directory and the staging area.
- **`git commit -m "Commit message"`**: Commits the staged snapshot to the project history with a message.
- **`git commit -a`**: Commits all changes to tracked files.

#### **Branching & Merging**

- **`git branch`**: Lists all branches in the repository.
- **`git branch [branch-name]`**: Creates a new branch.
- **`git checkout [branch-name]`**: Switches to the specified branch and updates the working directory.
- **`git merge [branch]`**: Merges the specified branch’s history into the current branch.

#### **Remote Repositories**

- **`git remote add [alias] [url]`**: Adds a remote repository under the specified alias.
- **`git fetch [alias]`**: Fetches all branches from the remote repository.
- **`git pull [alias] [branch]`**: Fetches and merges changes from the remote branch to the current branch.
- **`git push [alias] [branch]`**: Pushes all local changes to the remote repository.

#### **Inspection & Comparison**

- **`git log`**: Shows the commit history for the current branch.
- **`git diff`**: Shows changes between commits, commit and working tree, etc.
- **`git show [commit]`**: Shows various objects, like the changes made in a specific commit.

#### **Undoing Changes**

- **`git reset [file]`**: Unstages a file while retaining the changes in the working directory.
- **`git checkout -- [file]`**: Discards changes in the working directory.
- **`git revert [commit]`**: Creates a new commit that undoes the changes made by the specified commit.

#### **Stashing Changes**

- **`git stash`**: Temporarily shelves changes made to your working directory.
- **`git stash pop`**: Applies the stashed changes and removes them from the stash list.
