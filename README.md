# Personal website

Build environment installation :

See [Jekyll installation steps](https://jekyllrb.com/docs/installation/) first.

Then, run
~~~bash
bundle install
~~~

Finally, get Bootstrap running from inner submodule.

~~~bash
git submodule init
git submodule update
~~~

Run the server with the following command.

~~~bash
bundle exec jekyll serve
~~~
