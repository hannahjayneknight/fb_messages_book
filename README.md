# fb_messages_book

A script to reformat the messages html file you get when downloading messages from Facebook Messenger.

From this:

![Screenshot](Screenshot%202021-10-13%20104152.png)

To this:

![Screenshot](/Screenshot%202021-10-13%20103701.png)

Please find the script in the *message_1.html* file. Simply copy and paste this into your own messages file.

Also worth adding the following if intended to be printed:
```
@media print {
  div {
    break-inside: avoid;
  }
}
```