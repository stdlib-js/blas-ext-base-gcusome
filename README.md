<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gcusome

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Cumulatively test whether at least `k` elements in a strided array are truthy.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gcusome from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusome@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusome@esm/index.mjs';
```

#### gcusome( N, k, x, strideX, out, strideOut )

Cumulatively tests whether at least `k` elements in a strided array are truthy.

```javascript
var x = [ 0, 0, 1, 1, 1 ];
var out = [ false, false, false, false, false ];

gcusome( x.length, 2, x, 1, out, 1 );
// out => [ false, false, false, true, true ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: minimum number of truthy elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **out**: output [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to cumulatively test every other element:

```javascript
var x = [ 0, 0, 1, 0, 1, 0, 1, 0 ];
var out = [ false, false, false, false ];

gcusome( 4, 2, x, 2, out, 1 );
// out => [ false, false, true, true ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

// Initial arrays...
var x0 = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var o0 = new Uint8Array( x0.length );

// Create offset views...
var x1 = new Uint8Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var o1 = new Uint8Array( o0.buffer, o0.BYTES_PER_ELEMENT*3 ); // start at 4th element

gcusome( 3, 2, x1, 2, o1, 1 );
// o0 => <Uint8Array>[ 0, 0, 0, 0, 0, 0 ]
```

#### gcusome.ndarray( N, k, x, strideX, offsetX, out, strideOut, offsetOut )

Cumulatively tests whether at least `k` elements in a strided array are truthy using alternative indexing semantics.

```javascript
var x = [ 0, 0, 1, 1, 1 ];
var out = [ false, false, false, false, false ];

gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
// out => [ false, false, false, true, true ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to cumulatively test every other element starting from the third element:

```javascript
var x = [ 0, 0, 1, 0, 1, 0, 1, 0 ];
var out = [ false, false, false ];

gcusome.ndarray( 3, 2, x, 2, 2, out, 1, 0 );
// out => [ false, true, true ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `out` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@esm/index.mjs';
import filled from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@esm/index.mjs';
import gcusome from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusome@esm/index.mjs';

var x = bernoulli( 10, 0.5, {
    'dtype': 'generic'
});
console.log( x );

var out = filled( false, x.length );
gcusome( x.length, 2, x, 1, out, 1 );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gcusome.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gcusome

[test-image]: https://github.com/stdlib-js/blas-ext-base-gcusome/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gcusome/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gcusome/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gcusome?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gcusome.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gcusome/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gcusome/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gcusome/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gcusome/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gcusome/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gcusome/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gcusome/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gcusome/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gcusome/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/esm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
