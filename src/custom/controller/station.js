'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    mainAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async getprojectAction() {
        let model = this.model('projects');
        let post = this.post();
        let data = await model.where({
            prjCode: post.prjCode
        }).select();
        return this.success(data);
    }

    dataviewAction() {
        //模拟数据
        return this.display();
    }

    systemviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    gongkuangviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    deviceviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    // viewlist
    viewlistAction() {
        return this.display();
    }

    async getchannelsAction() {
        let model = this.model('channels');
        let post = this.post();
        console.log(post);
        let data = await model.where({
            ptCode: post.ptCode
        }).select();
        // return this.success(data);
        return this.json({
            code: 0,
            msg: 'success',
            data: data
        })
    }

    async getviewlistAction() {
        let model = this.model('uviews');
        let post = this.post();
        let data = await model.select();
        return this.success(data);
    }

    async viewlistdelAction() {
        let model = this.model('uviews');
        let post = this.post();
        let delId = await model.where({
            id: post.id
        }).delete();
        return this.success(delId);
    }

    async viewlistaddorupdateAction() {
        let model = this.model('uviews');
        let post = this.post();
        if (post.id) {
            let data = await model.where({
                id: post.id
            }).update({
                vName: post.vName,
                tags: post.tags,
                notes: post.notes,
                activity: post.activity,
                isPublic: post.isPublic,
            });
            return this.success(data);
        } else {
            let data = await model.add(post);
            return this.success(data);
        }
    }

    workplanAction() {
        //auto render template file index_index.html
        return this.display();
    }

    // 弹出框
    channelhistoryAction() {
        return this.display();
    }
}