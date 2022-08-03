import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./faq.css"

export default function Faq() {
  return (
    <div id="faq" className="container">
        <h1>Frequently Asked Questions</h1>
        <div className='accordion'>
            <div className="accordion-item" id="question1">
                <a className="accordion-link" href="#question1">
                Will I have to pay for my Web3 identity?
                    <AddIcon className="add" />
                    <RemoveIcon className="remove" />
                </a>
                <div className="answer">
                    <p>
                    No. All the users that register will be able to claim their free .rariko identity that will be non-transferable.
                    </p>
                </div>
            </div>

            <div className="accordion-item" id="question2">
                <a className="accordion-link" href="#question2">
                What do you mean by automated communities?
                    <AddIcon className="add" />
                    <RemoveIcon className="remove"/>
                </a>
                <div className="answer">
                    <p>
                    Every user on our platform will be getting instant access to token-gated communities and the entries will be monitored through our Real-time Asset Authentication.
                    </p>
                </div>
            </div>

            <div className="accordion-item" id="question3">
                <a className="accordion-link" href="#question3">
                Is RariKo safer than Discord?
                    <AddIcon className="add" />
                    <RemoveIcon className="remove"/>
                </a>
                <div className="answer">
                    <p>
                    On RariKo, you are 95% less likely to get targeted by a phishing link as all the links that would be shared by admins will have to be signed by their wallets.
                    </p>
                </div>
            </div>

            <div className="accordion-item" id="question4">
                <a className="accordion-link" href="#question4">
                How do I trade NFTs in chats?
                    <AddIcon className="add" />
                    <RemoveIcon className="remove" />
                </a>
                <div className="answer">
                    <p>
                    You can message any individual and offer to buy their NFT and initiate the trade in the messages. The seller would accept the request and the NFT will be transferred to you and the crypto would be sent to the seller.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
