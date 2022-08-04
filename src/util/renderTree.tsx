

import React from 'react';
import { componentProp } from '@/store/exhibition';
import cmpData from '@/cmp/index';
import { defaultExhibition } from '@/config/defaultExhibition';
import { mergeObj } from '@/util';

const renderTree = (tree: componentProp, ...prop: any) => {
    const { tagName, tagProps, child, id } = tree;
    const obj = mergeObj(defaultExhibition, { ...tagProps, id });
    // @ts-ignore
    const Cmp = cmpData[tagName as string];
    return <Cmp {...obj} key={id} onClick={(e: Event) => obj.onClick(e, obj, ...prop)}> {child && child.map((item) => renderTree(item, ...prop))} </Cmp>
}

export default renderTree