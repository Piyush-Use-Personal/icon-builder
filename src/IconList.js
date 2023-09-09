import iconBuilder from "./register"


const IconList = ({ icons }) => {
    const arrayDataItems = []

    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        let A = iconBuilder.getIcon(icon.name);
        arrayDataItems.push(<li key={icon.name}>{icon.name} <A /></li>)
    }

    return <>
        {arrayDataItems}
    </>
}

export default IconList

/* 
1 create funtion named register
2 register(string,value)
3 enter in set of icon names
*/
