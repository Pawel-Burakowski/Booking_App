import { Component } from "react";

class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorinfo){
        console.log("działa");
    }

    render() {
        if (this.state.hasError) {
            return <h2>Problemy ze stroną</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundry