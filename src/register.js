import IconBuilder from "./Feathericon"
import logo from "./logo.svg"
import boat from "./1.svg"

const iconbuilder = new IconBuilder()

iconbuilder.build()
iconbuilder.register("React",logo,true )
iconbuilder.register("Boat",boat,true )



export default iconbuilder;