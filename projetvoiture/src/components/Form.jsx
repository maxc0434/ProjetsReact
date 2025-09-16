import { Component } from "react";
import Image from "./Image";

class Form extends Component {
    render() {
        return(
            <div>
                <Image/>
                <h1>Commentaire</h1>

                <form>
                    <label>Pseudo</label>
                    <input type="text" value="" />
                </form>
            </div>
        )
    }
}

export default Form