# How to update the documentation website

The design system has two primary parts, the UI component library [`/lib`](../lib/) and the documentation website [`/docs`](../docs/). The following guidelines will help you update the documentation website. For guidance on developing the component library, see [How to update the component library](./03_how_to_update_library.md).

## Prerequisites

Your development server is set up and running at http://localhost:4000/ as described in the [Getting started](./01_getting_started.md).

## Updating content

The documentation site is built using [NuxtJS](https://nuxtjs.org/) (configured in `/nuxt.config.js`) and [Vue](https://vuejs.org/).

The directories and files in `/docs/pages/` are mapped by NuxtJS to URLs. Start with those files for making updates to documentation content. The table of contents, including sections and pages, are defined in `/docs/tableOfContents.js`.

Common components used in the documentation site are prefixed with `Docs*` and available for use in all pages.

Layout:

* `<DocsPageTemplate />` - the main page template used by all pages
* `<DocsPageSection />` - sections within the page template with auto-generated anchor links

Navigation:

* `<DocsSubNav />` - for showing sub-navigation as a list of links

Links:

* `<DocsAnchorTarget />` - for creating anchor link targets
* `<DocsExternalLink />` - links to an external website
* `<DocsInternalLink />` - links to pages within the design system
* `<DocsLibraryLink />` - links to library components with `<code>` formatting

Content:

* `<DocsToggleButton />` with `<DocsToggleContent />` - toggles visibility of content
* `<DocsTable />` - for showing styled table

Illustration:

* `<DocsShow />` - for showing live examples
* `<DocsShowCode />` - for showing code
* `<DocsDoNot />` - for showing side-by-side "Do" and "Do not" illustrations
* `<DocsColorBlock />` - for showing a theme color
* `<DocsIconBlock />` - for showing an icon




All Kolibri shared components (for example `KButton`) are also available to be used within content. However, this should be limited to using them for _examples of usage_ only.

## Updating the library components documentation

The `DocsPageTemplate` component takes an optional Boolean prop called `apiDocs`. When provided, the template will look for a shared library component with the same name, extract documentation for the component's props, events, slots, and methods, and display those at the bottom of the page after any other `DocsPageSection` components.

To make updates to this content, modify the library component directly. We support a combination of Markdown and JSDocs inside the components.

JSDocs functionality is primarily provided by the [`vue-docgen-api`](https://www.npmjs.com/package/vue-docgen-api) package. For more information, see [Documenting components](https://vue-styleguidist.github.io/docs/Documenting.html). Note that we leverage a specific subset of the functionality described there. Documenting this is an [open issue](https://github.com/learningequality/kolibri-design-system/issues/222).

### Create a documentation page for a new component

1. For a new component (`/lib/KNewComponent.vue`), create a new Vue file in [`/docs/pages`](../docs/pages) named after the component, except in lowercase (`/docs/pages/knewcomponent.vue`).
2. Add the following to `/docs/pages/knewcomponent.vue`:
```vue
<template>
  <DocsPageTemplate apiDocs>

  </DocsPageTemplate>
</template>
```
3. Add a new entry to `pages` array in the `Section` with the title `'Code library components'` in [/docs/tableOfContents.js](../docs/tableOfContents.js):
  ```javascript
  new Page({
    path: '/knewcomponent',
    title: 'KNewComponent',
    isCode: true,
  }),
  ```
4. See your new documentation page live at http://localhost:4000/knewcomponent (if it doesn't load, try to restart the development server)

## Import aliases

NuxtJS provides two webpack [import aliases](https://nuxtjs.org/guide/directory-structure#aliases):

* `~~/` points to the root of the repository
* `~/` points to the `/docs` directory

These aliases should _not_ be used by code inside the `/lib` directory because external webpack configurations will not handle them correctly.
