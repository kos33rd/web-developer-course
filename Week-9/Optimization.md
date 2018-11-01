# Web application performance audits and optimization

## Firstly we'll make an audit of our current application without any optimizations with chrome dev-tools and lighthouse.

![Audit settings](/images/audit_settings.png)


Results:
![Initial application audit results](/images/before_optimization.png)

Recommendations:
![Initial application audit recommendations](/images/before_optimization_recommendations.png)


### Bundle compilation

We have to build our application bundle and use it instead of development environment bundle:

```sh
npm run build
```

Then we have to serve our application somehow. Our bundle now is a bunch of .html and .js files in `dist` directory. We have to serve them with web server (no webpack-dev-server now).

```sh
npm i serve -g
cd dist
serve -s
```

Now let's take another audit run:
![Application audit after build](/images/after_serve.png)


Something wrong with this
![](/images/hmm.jpg)


We just built and served our develop bundle but only with another web server.


```sh
npm run prod
```


![](/images/after_prod.png)

Ah, some progress. 



### Compression

Our `serve` web-server could not help us with data compression, so we have to adopt a little bit more serious approach:

```sh
nginx -c "nginx.conf"
```

















