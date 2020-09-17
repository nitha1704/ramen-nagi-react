import React from 'react';

export const renderInput = ({ input, label, name, type, required, meta, onsetConfirmMsgFalse }) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <input className="form-control" {...input} name={name} type={type} required={required} onClick={() => onsetConfirmMsgFalse()}/>

            {meta.touched &&
                (
                    (meta.error && <div className="p-2 mb-2 text-danger bg-dark box-error">{meta.error}</div>)
                    ||
                    (meta.warning && <div className="p-2 mb-2 text-warning bg-secondary box-warning">{meta.warning}</div>)
                )
            }

        </div>
    )
}


export const renderTextArea = ({ input, label, name, type, required, meta, onsetConfirmMsgFalse }) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <textarea className="form-control" {...input} name={name} type={type} required={required} 
            rows="4" onClick={() => onsetConfirmMsgFalse()} />

            {meta.touched &&
                (
                    (meta.error && <div className="p-2 mb-2 text-danger bg-dark box-error">{meta.error}</div>)
                    ||
                    (meta.warning && <div className="p-2 mb-2 text-warning bg-secondary box-warning">{meta.warning}</div>)
                )
            }

        </div>
    )
}


export const renderSelect = ({input, label, name, type, required, meta, onsetConfirmMsgFalse}) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <select className="form-control" {...input} name={name} type={type} required={required} onClick={() => onsetConfirmMsgFalse()}>
                <option></option>
                <option value="thailand">Thailand</option>
                <option value="japan">Japan</option>
            </select>

            {meta.touched &&
                (
                    (meta.error && <div className="p-2 mb-2 text-danger bg-dark box-error">{meta.error}</div>)
                    ||
                    (meta.warning && <div className="p-2 mb-2 text-warning bg-secondary box-warning">{meta.warning}</div>)
                )
            }

        </div>
    )
}