<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# deg2radf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Convert an angle from degrees to radians (single-precision).

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-deg2radf
```

</section>

<section class="usage">

## Usage

```javascript
var deg2radf = require( '@stdlib/math-base-special-deg2radf' );
```

#### deg2radf( x )

Converts an angle from degrees to radians (single-precision).

```javascript
var r = deg2radf( 90.0 );
// returns ~1.571

r = deg2radf( -45.0 );
// returns ~-0.785

r = deg2radf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var deg2radf = require( '@stdlib/math-base-special-deg2radf' );

var d;
var r;
var i;

for ( i = 0; i < 100; i++ ) {
    d = (randu()*720.0) - 360.0;
    r = deg2radf( d );
    console.log( 'degrees: %d => radians: %d', d, r );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-deg2radf
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/deg2radf.h"
```

#### stdlib_base_deg2radf( x )

Converts an angle from degrees to radians (single-precision).

```c
float y = stdlib_base_deg2radf( 90.0f );
// returns ~1.571f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_deg2radf( const float x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/deg2radf.h"
#include <stdio.h>

int main() {
    float x[] = { 45.0f, 90.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_deg2radf( x[ i ] );
        printf( "deg2radf(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/math/base/special/deg2rad`][@stdlib/math/base/special/deg2rad]: convert an angle from degrees to radians.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-deg2radf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-deg2radf

[test-image]: https://github.com/stdlib-js/math-base-special-deg2radf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-deg2radf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-deg2radf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-deg2radf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-deg2radf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-deg2radf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-deg2radf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/deg2rad]: https://github.com/stdlib-js/math-base-special-deg2rad

<!-- </related-links> -->

</section>

<!-- /.links -->
