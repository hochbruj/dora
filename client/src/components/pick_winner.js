import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class PickWinner extends Component {
    constructor(props) {
        super(props);

        this.state = { question: null,
                         contract: null,
                          answers: null,
                            deadline: null };
    }

    render() {
        return (
            <Button color="green" onClick={this.pickWinner}>
            Best answer
        </Button>)
    }

    pickWinner = async () => {
        try {
            await this.props.contract.pickWinner(this.props.answerIndex,{
                from: this.props.accounts[0],
            })

            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }


}

export default PickWinner;