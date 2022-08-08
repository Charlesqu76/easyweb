

const ew_class = 'ew_class'

const defaultExhibition = {
    style: {
        width: '100px',
        height: '100px',
    },
    onClick: (e: Event, ...arg: Array<any>) => {
        const arg1 = arg[0];
        const arg2 = arg[1];
        const { id } = arg1;
        const { exhibition } = arg2;
        exhibition.setConfigData(arg1);
        e.stopPropagation();
    },
    onMouseEnter: (e: MouseEvent) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass.split(' ') || [];
        // @ts-ignore
        !oldClassList.includes(ew_class) && e.target.setAttribute('class', `${oldClass} ${ew_class}`)
    },
    onMouseLeave: (e: Event) => {
        e.stopPropagation();
        // @ts-ignore
        const oldClass = e.target.getAttribute('class');
        const oldClassList = oldClass.split(' ') || [];
        const newClassList = oldClassList.filter((cls: string) => cls !== ew_class) || [];
        // @ts-ignore
        (newClassList.length !== oldClassList.length) && e.target.setAttribute('class', `${newClassList.join(' ')}`)
    }
}

export { defaultExhibition }