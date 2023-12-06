# doctors-appointment
A doctor's appointment program that uses Django web framework and bootstrap front-end library.

# The front-end
Front end side of things are implemented and works well on a desktop.

# The back-end
Back-end side of things haven't been implemented because of my lack of knowledge in that area.
However I am still learning and will be able to implement them once I understand the core
concept of login and session of django.

# How to use:
1. Clone these files to any directory.

2. Use the existing virtual environment 'env' by selecting python interpreter in VSCODE to the
recommended one (python in env). If that doesn't work, you can create your own virtual environment.

->  python -m venv <virtual-env-name-here>

Then activate the created virtual environment through the above mentioned VSCODE python interpreter.

3. Install django

->  pip install django

And install any dependencies mentioned in requirements.txt

4. Now simply type the command while the VSCODE terminal is in the same directory as the manage.py file.

-> py manage.py runserver

You can then visit the address mentioned in the end of the terminal, it's usually:

-> http://127.0.0.1:8000/

5. pressing ctrl+C in the terminal will stop the server.