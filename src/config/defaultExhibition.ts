

const ew_class = 'ew_class';
const ew_draginclass = 'ew_draginclass';

const defaultExhibition = {
    style: {
        // width: '100px',
        // height: '100px',
    },
    onClick: (e: Event, ...arg: Array<any>) => {
        const arg1 = arg[0];
        const arg2 = arg[1];
        const { id } = arg1;
        const { exhibition } = arg2;
        // exhibition.setConfigData({ ...arg1, id });
        exhibition.setSelectedId(id);
        e.stopPropagation();
    },
    onMouseEnter: (e: MouseEvent) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass?.split(' ') || [];
        // @ts-ignore
        !oldClassList.includes(ew_class) && e.target.setAttribute('class', `${oldClass} ${ew_class}`)
    },
    onMouseLeave: (e: Event) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass?.split(' ') || [];
        const newClassList = oldClassList.filter((cls: string) => cls !== ew_class) || [];
        // @ts-ignore
        (newClassList.length !== oldClassList.length) && e.target.setAttribute('class', `${newClassList.join(' ')}`)
    },
    onDragEnter: (e: Event) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass?.split(' ') || [];
        // @ts-ignore
        !oldClassList.includes(ew_draginclass) && e.target.setAttribute('class', `${oldClass} ${ew_draginclass}`)
    },
    onDragLeave: (e: Event) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass?.split(' ') || [];
        const newClassList = oldClassList.filter((cls: string) => cls !== ew_draginclass) || [];
        // @ts-ignore
        (newClassList.length !== oldClassList.length) && e.target.setAttribute('class', `${newClassList.join(' ')}`)

    },
    onDragOver: (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
    },
    onDrop: (e: Event, ...args: Array<any>) => {

        e.preventDefault();
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass?.split(' ') || [];
        const newClassList = oldClassList.filter((cls: string) => cls !== ew_draginclass) || [];
        // @ts-ignore
        (newClassList.length !== oldClassList.length) && e.target.setAttribute('class', `${newClassList.join(' ')}`)
        // @ts-ignore
        const id = e.target.id;
        // @ts-ignore
        const key = e.dataTransfer.getData('cmpKey');
        const arg2 = args[1];
        const { exhibition } = arg2;
        exhibition.addItemToTree(id, key);
    },
}

export { defaultExhibition }