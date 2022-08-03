

import React from 'react';
import { componentProp } from '@/store/exhibition';
import cmpData from '@/cmp/index'

const renderTree = (tree: componentProp) => {
    const { tagName, tagProps, child } = tree;
    // @ts-ignore
    const Cmp = cmpData[tagName as string];
    return <Cmp {...tagProps} key={'1'}> {child && child.map((item) => renderTree(item))} </Cmp>
}

export default renderTree