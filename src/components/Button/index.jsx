import PropTypes from 'prop-types'
import {Button} from './styles'

function DefautlButton({children, theme, ...props}) {

    return (

        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefautlButton.prototype ={

    theme: PropTypes.string
}

export default DefautlButton