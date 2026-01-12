//*  only cd --? go to home directory
//! what are environment variables?
//? environement variables are dynamic values which affect the processes or programs on a computer.
//? they are part of the environment in which a process runs.
//? for example, PATH is an environment variable that tells the shell where to look for executable files.
//* for example  echo $PATH gives : 
  /*  /home/revanthkurapati /.nvm / versions / node / v20.5.1 / bin: /usr/local / sbin: /usr/local / bin: /usr/sbin: 
/usr/bin: /sbin:/bin: /usr/games: /usr/local / games: /usr/lib / wsl / lib: /mnt/c / Program Files / Common Files / Oracle / Java / javapath:
 /mnt/c / Windows / system32: /mnt/c / Windows: /mnt/c / Windows / System32 / Wbem: /mnt/c / Windows / System32 / WindowsPowerShell / v1.0 /:
  /mnt/c / Windows / System32 / OpenSSH /: /mnt/c / Program Files(x86) / NVIDIA Corporation / PhysX / Common: /mnt/c / Program Files / NVIDIA Corporation / NVIDIA NvDLISR:
   /mnt/c / Program Files / Java / jdk - 20 / bin: /mnt/c / MinGW / bin: /mnt/c / Users / revan / Downloads / flutter_windows_3.13.2 - stable / flutter / bin: 
   /mnt/c / Program Files / Git / cmd: /mnt/c / Program Files / Git / mingw64 / bin: /mnt/c / Program Files / Git / usr / bin: /mnt/c / ProgramData / chocolatey / bin:
    /mnt/c / WINDOWS / system32: /mnt/c / WINDOWS: /mnt/c / WINDOWS / System32 / Wbem: /mnt/c / WINDOWS / System32 / WindowsPowerShell / v1.0 /: /mnt/c / WINDOWS / System32 / OpenSSH /: 
    /mnt/c / Program Files / Docker / Docker / resources / bin: /mnt/c / Program Files / nodejs /: /mnt/c / Program Files / PuTTY /: /mnt/c / Users / revan / AppData / Local / Programs / Python / Python313 / Scripts /: 
    /mnt/c / Users / revan / AppData / Local / Programs / Python / Python313 /: /mnt/c / Users / revan / AppData / Local / Programs / Python / Python312 / Scripts /: 
    /mnt/c / Users / revan / AppData / Local / Programs / Python / Python312 /: /mnt/c / Program Files / MySQL / MySQL Shell 8.0 / bin /: /mnt/c / Users / revan / AppData / Local / Microsoft / WindowsApps: 
    /mnt/c / Users / revan / AppData / Local / Programs / Microsoft VS Code / bin: /mnt/c / Users / revan / AppData / Local / Programs / Python / Python312 / Scripts: /mnt/c / Users / revan / AppData / Roaming / Microsoft / Windows / Start Menu / Programs / Python 3.12:
     /mnt/c / Users / revan / AppData / Roaming / npm: /snap/bin */
//* this is displayed when we run echo $PATH command in terminal which means ,when ever we run any command in terminal ,the system will look for that command in all these directories one by one until it finds the command to execute it.
//* if the command is not found in any of these directories ,it will give an error saying command not found. thesse are colon separated values.
//! how to set environment variables?
//? we can set environment variables using export command in linux.
//* for example export VAR_NAME = value
//! how to view all environment variables?
//? we can view all environment variables using printenv or env command in linux.
//* for example printenv or env

//! whenever we open a new terminal ( in my lap you see ) revanthkurapati@REVANTHKURAPATI --> this is username@hostname
//? username is for linux system and hostname is the name of the system.


//! what happens when we open the terminal? 
//? when we open a terminal also some files automatically get executed to set up the environment for the user.
//* these files are called shell configuration files.
//* for bash shell the main configuration files are 
  //~ 1. /etc/profile  --> system wide configuration file
  //~ 2. ~/.bash_profile  --> user specific configuration file
  //~ 3. ~/.bashrc  --> user specific configuration file 
  //~ 4. ~/.profile  --> user specific configuration file
//* when we open a terminal the /etc/profile file is executed first then the ~/.bash_profile file is executed then the ~/.bashrc file is executed and finally the ~/.profile file is executed.
//* these files are executed in the above order to set up the environment for the user.
//* we can add our custom environment variables in these files to make them permanent.   