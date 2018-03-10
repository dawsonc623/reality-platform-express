# reality-platform-express
An Express implementation of the Reality Platform API.

# Set Up
This project uses Vagrant with the VirtualBox provider, so you will need [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads) installed on your machine. Once they are installed, just `vagrant up` to get the local environment running.

## WSL
If you are using Vagrant through WSL, you will need to install VirtualBox on the Windows side and Vagrant on the Linux side. Then, you have to run `export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"` before running any `vagrant` commands. You can put that in your `~/.bashrc` or `~/.profile` to save having to run it each time you open a WSL Bash terminal.
