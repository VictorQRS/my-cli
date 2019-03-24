# my-cli
Source code for my own cli

# Usage
## Normal case:

``` bash
node ./my.js hello alan bernard charles
```

Outputs:

```
Hello, alan!
Hello, bernard!
Hello, charles!
```

## Lower case:

``` bash
node ./my.js hello -l alan bernard charles
```

Outputs:

```
Hello, alan!
Hello, bernard!
Hello, charles!
```

## Upper case:

``` bash
node ./my.js hello -u alan bernard charles
```

Outputs:

```
Hello, alan!
Hello, bernard!
Hello, charles!
```

## Both cases:

``` bash
node ./my.js hello -u -l alan bernard charles
```

Outputs:

```
Hello, alan!
Hello, bernard!
Hello, charles!
```