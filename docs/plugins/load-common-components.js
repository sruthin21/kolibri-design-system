import Vue from 'vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import DocsExternalLink from '~/common/DocsExternalLink';
import DocsGithubLink from '~/common/DocsGithubLink';
import DocsInternalLink from '~/common/DocsInternalLink';
import DocsLibraryLink from '~/common/DocsLibraryLink';
import DocsAnchorTarget from '~/common/DocsAnchorTarget';
import DocsPageSection from '~/common/DocsPageSection';
import DocsPageTemplate from '~/common/DocsPageTemplate';
import DocsDoNot from '~/common/DocsDoNot';
import DocsShow from '~/common/DocsShow';
import DocsShowCode from '~/common/DocsShowCode';
import DocsToggleContent from '~/common/DocsToggleContent';
import DocsToggleButton from '~/common/DocsToggleButton';
import DocsFilter from '~/common/DocsFilter';
import DocsTable from '~/common/DocsTable';
import DocsSubNav from '~/common/DocsSubNav';

Vue.component('DocsPageTemplate', DocsPageTemplate);
Vue.component('DocsPageSection', DocsPageSection);
Vue.component('DocsLibraryLink', DocsLibraryLink);
Vue.component('DocsInternalLink', DocsInternalLink);
Vue.component('DocsAnchorTarget', DocsAnchorTarget);
Vue.component('DocsExternalLink', DocsExternalLink);
Vue.component('DocsGithubLink', DocsGithubLink);
Vue.component('DocsShow', DocsShow);
Vue.component('DocsShowCode', DocsShowCode);
Vue.component('DocsDoNot', DocsDoNot);
Vue.component('DocsFilter', DocsFilter);
Vue.component('DocsToggleContent', DocsToggleContent);
Vue.component('DocsToggleButton', DocsToggleButton);
Vue.component('DocsTable', DocsTable);
Vue.component('DocsSubNav', DocsSubNav);

Vue.use(VueSimpleMarkdown);
