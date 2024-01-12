import React from 'react';
import QuizCard from './components/QuizCard'; // Adjust the import path based on your file structure
import ConnectButton from './components/ConnectButton'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
const App = () => {
    const projectId = "9e38cf00b8a28f9bc26631004877ae0e"
    const mainnet = {
        chainId: 1,
        name: 'Ethereum',
        currency: 'ETH',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://cloudflare-eth.com'
    }
    const metadata = {
        name: 'My Website',
        description: 'My Website description',
        url: 'https://mywebsite.com',
        icons: ['https://avatars.mywebsite.com/']
    }
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [mainnet],
        projectId
    })
    // Example question and options
    const question = "Mathgirl, is 42 a prime number?";
    const options = ["Yes", "No"];

    // Handler for when an answer is submitted
    const handleAnswerSubmit = (answer) => {
        console.log(`Answer submitted: ${answer}`);
        // You can add more logic here to handle the answer
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mathgirl</h1>
                <ConnectButton>Connect Wallet</ConnectButton>
            </header>
            <main>
                <QuizCard
                    question={question}
                    options={options}
                    onAnswerSubmit={handleAnswerSubmit}
                />
            </main>
        </div>
    );
};

export default App;
