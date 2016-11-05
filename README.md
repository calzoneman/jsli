# @calzoneman/jsli

This is a simple logging interface for node.js, similar to
[SLF4J](http://www.slf4j.org/).  The idea is that the interface of creating a
logger and logging to it is decoupled from the underlying logging mechanism,
which allows you to write code that logs from a library module without tightly
coupling it to the specific log implementation of the application (for example,
the application might choose to log with `winston`, a custom file writer, or
just to the console`).

This was created for personal use in my own modules.  I haven't published any
log implementation wrappers for it yet.
