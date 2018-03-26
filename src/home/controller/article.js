'use strict';

import Base from './base';

export default class extends Base {
    detailAction() {
        return this.display();
        // 处理异步嵌套的问题
    }
}