# process-binaryedge-urls

[binaryedge.io](binaryedge.io) is useful enough but when it comes to downloading and processing the URL data, it's a bit of hassle - so here's a little tool for just getting the urls after downloading it as JSON-like structure.

Prerequisite: node.js installed

# Install method #1
```
sudo cp processbinaryedgeurls /usr/local/bin && sudo chmod a+x /usr/local/bin/processbinaryedgeurls

which processbinaryedgeurls
```

# Install method #2
```
npm i -g process-binaryedge-urls 

which process-binaryedge-urls
```

# Usage
1. Search anything on binaryedge.io

2. Click on the download button on the right hand side and save the file

3. Process it

```
processbinaryedgeurls my-just-downloaded-file-from-binaryedge
```


