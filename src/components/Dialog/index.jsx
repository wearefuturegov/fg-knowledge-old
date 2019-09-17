import React from "react"
import { Dialog } from "@reach/dialog"
// import "@reach/dialog/styles.css"



const StyledDialog = ({
    history
  }) =>
    <Dialog onDismiss={() => history.push("/")}>
        blaaaah
    </Dialog>

export default StyledDialog