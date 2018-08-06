# HTML

## What is HTML?
HTML is the standard markup language for creating Web pages.

- HTML stands for Hyper Text Markup Language;
- HTML describes the structure of Web pages using XML markup;
- HTML elements are the building blocks of HTML pages;
- HTML elements are represented by tags.

There is many historical revisions of HTML standard, but we will focus on latest and actual HTML5 specification.

Version	 | Year
---------|-----
HTML     | 1991
HTML 2.0 | 1995
HTML 3.2 | 1997
HTML 4.01| 1999
XHTML    | 2000
**HTML5**| 2014

Let's take a look at simple example of HTML element

```html
<article>My First HTML Element</article>
```
HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
Browsers do not display the HTML tags, but use them to render the content of the page

HTML tags normally come in pairs like `<p>` and `</p>`
The first tag in a pair is the start (opening) tag, the second tag is the end (closing) tag

## Web page structure

Elements is base building blocks of HTML document, displayed by web browsers.
Elements could be nested and therefore form hierarchical structure. This structure reflects semantic and visual representation of document.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

* The `<!DOCTYPE html>` declaration defines this document to be HTML5 (special case of non-self-closing single tag)
* The `<html>` element is the root element of an HTML page
* The `<head>` element contains meta information about the document
* The `<title>` element specifies a title for the document
* The `<body>` element contains the visible page content
* The `<h1>` element defines a large heading
* The `<p>` element defines a paragraph

Let's save our web page as `index.html` and open it in Google Chrome browser:

![Screenshot of browser with rendered HTML](/Week-1/webpage.png)

*Result*


## HTML page semantics

Below is a visualization of an HTML page structure:

![HTML page structure](./Week-1/structure.png)

> Note: Only the content inside the `<body>` section (the white area above) is displayed in a browser.

Keep in mind: HTML at first represents semantic srtucture of document, not it's appearance. 
"Semantic HTML" refers to the idea that all your HTML markup should convey the underlying meaning of your content.

Using semantic markup is an important aspect of modern web development because it makes it easier for search engines, screen readers, and other machines to identify the different parts of your website. 
It also helps you as a developer keep your site organized, which, in turn, makes it easier to maintain.

![Semantic markup](./Week-1/semantic-page.png)

*Here is correct semantic HTML markup*


![Non-semantic markup](./Week-1/non-semantic-page.png)

![Don't do like this](./common/dislike.png)

*And it's evil twin - non-semantic markup*


## Write HTML

Within the course we recommend using professional IDE like WebStorm, IntelliJ IDEA, Atom or VS Code,
but it's OK to use lightweight text editors in such simple cases like above.
Essential requirement for HTML text editor are HTML syntax highlight and UTF-8 support.


Files, containing HTML, have `.html` or `.htm` extension.
A common filename for web application entry point is `index.html`.
When browser requests a URL that points to a directory structure instead of an actual web page, web server will generally serve this default (index) page.

For example, if you'll open in your browser URL like `http://localhost/`, web server will give you content of `index.html` file, located in your web server root directory,
so content of this page will be equivalent to `http://localhost/index.html`.

Last thing about html files: we recommend using UTF-8 encoding when saving files.
This charset is universal way to code and maintain multilingual applications without headache about web server configuration and third-party libs interoperability.

## HTML Document

As we saw before, all HTML documents must start with a document type declaration: `<!DOCTYPE html>`.

The HTML document itself begins with `<html>` and ends with `</html>`.

The `<head>` section contains meta information about page and additional non-visualizable data.
Some of useful tags within head tag includes `<meta>`, `<script>`, `<style>` and `<title>`.

The visible part of the HTML document is between `<body>` and `</body>`.
There is various amount of "presentational" tags, which could be used inside of body.

Some of them: `<span>`, `<img>`, `<table>`, `<video>`, `<input>`, `<button>`.

Full list of avaliable HTML tags could be found at [W3School HTML Element Reference page](https://www.w3schools.com/tags/ref_byfunc.asp).

## Into elements

// TBD





-------
### Soucres:
* [W3School HTML Introduction](https://www.w3schools.com/htmL/html_intro.asp)
* [Semantic HTML](https://internetingishard.com/html-and-css/semantic-html/)






