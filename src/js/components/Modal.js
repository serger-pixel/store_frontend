
import React from "react";

function Modal(props){
    return(
        <div class="modal" tabindex="-1" id={props.id}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ошибка</h5>
                    <button type="button" class="btn-close"
                     data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id={props.id + "text"}></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                     data-bs-dismiss="modal">Закрыть</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;