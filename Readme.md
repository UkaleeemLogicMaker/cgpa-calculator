how to update your fork:

1-  create the fork and clone it to ur device using:
    git clone www.urForkLink.com

2-  cd into the fork file, add remote from the original repositry to the fork  using:
    git remote add upstream www.linkOfOriginalRepo.com
    git fetch upstream
    
you only need to this once, later on you can skip step 1&2 and directly go to step 3.

3-  Update your fork from original repo using:
    git pull upstream master

easy steps :D

