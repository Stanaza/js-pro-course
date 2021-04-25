import React, {useState} from 'react';
import './Post.scss'
import ModalWindow from "./ModalWindow";

const Post = ({title, content, name, email, website, address, phone}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <div className="card border-primary mb-3">
                <div className="card-header">
                    <button type="button" className="btn btn-link" onClick={() => setModalActive(true)}>
                        Author: {name}
                    </button>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive} name={name}
                         email={email}
                         website={website}
                         address={address}
                         phone={phone}
            />
        </>

    )
};

export default Post;