import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from './blog';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs: Blog[] = [
      { id: 0, title: 'angular相关笔记，自习自习自习自习', readNum: 144, star: 4, type: 0, creatTime: 1513426971285 },
      { id: 1, title: 'vue相关笔记笔记，vue搭建后端渲染笔记', readNum: 14, star: 3, type: 0, creatTime: 1513426931285 },
      { id: 2, title: 'react相关笔记，如何搭建react全家桶', readNum: 1454, star: 5, type: 0, creatTime: 1513426901285 },
      { id: 3, title: 'webpack配置相关笔记笔记，如何玩转webpack装逼', readNum: 1, star: 3, type: 1, creatTime: 1513426931285 },
      { id: 4, title: 'webpack配置相关笔记笔记，如何玩转webpack装逼', readNum: 1, star: 3, type: 1, creatTime: 1513426931285 },
      { id: 5, title: 'angular相关笔记，自习自习自习自习', readNum: 144, star: 4, type: 0, creatTime: 1513426971285 },
      { id: 6, title: 'vue相关笔记笔记，vue搭建后端渲染笔记', readNum: 14, star: 3, type: 0, creatTime: 1513426931285 },
      { id: 7, title: 'react相关笔记，如何搭建react全家桶', readNum: 1454, star: 5, type: 0, creatTime: 1513426901285 },
      { id: 8, title: 'webpack配置相关笔记笔记，如何玩转webpack装逼', readNum: 1, star: 3, type: 1, creatTime: 1513426931285 },
      { id: 9, title: 'webpack配置相关笔记笔记，如何玩转webpack装逼', readNum: 1, star: 3, type: 1, creatTime: 1513426931285 },
    ];
    return {blogs};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/