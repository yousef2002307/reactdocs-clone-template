import React, { Component } from "react";
interface IProps {

}
interface IState {
    counter : number,
    products : any[],
}
 class Test extends Component<IProps,IState> {
    constructor(props:IProps){
        console.log("%c constructor is called","color:red;background:yellow")
        super(props)
        this.state =  {
            counter : 0,

            products : [],
        }
    }

    componentDidMount(): void {
        console.log("%c componentDidMount is called","color:red;background:green")
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => console.log(data));

/* { status: 'ok', method: 'GET' } */
    }
    render(){
        return (
            <div>
                <h1>Test {this.state.counter}</h1>
            </div>
        )
    }

}
export default Test;