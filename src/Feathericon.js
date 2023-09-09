import * as Icon from 'react-feather';
function SvgComponent({ iconComponent, color, size }) {
    return <img height={size} width={size} color={color} src={iconComponent} />
}
class IconBuilder {
    constructor() {
        this.icon = {}
    }
    getIcon(name) {
        return this.icon[name]
    }

    build() {

        Object.entries(Icon).forEach(([iconName, iconComponent]) => {
            this.register(iconName, iconComponent, false)
        })
    }
    register(iconName, iconComponent, isSvg) {

        if (isSvg) {
            const nestedSvg = SvgComponent.bind({})
            nestedSvg.defaultProps = {
                iconComponent
            }
            this.icon[iconName] = nestedSvg;
        }
        else {
            this.icon[iconName] = iconComponent;
        }

    }
}
export default IconBuilder;