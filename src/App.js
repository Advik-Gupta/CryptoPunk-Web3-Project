import './App.css';
import Header from './components/Header';
import PunkList from './components/punkList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {
	const [ punkListData, setpunkListData ] = useState([]);
	const [ apeListData, setapeListData ] = useState([]);
	const [ azukiListData, setazukiListData ] = useState([]);
	const [ selectedPunk, setselectedPunk ] = useState(0);
	const [ selectedList, setselectedList ] = useState('punkListData');
	const [ Lists, setLists ] = useState([]);

	useEffect(() => {
		let getMyNfts = async () => {
			const openseaData = await axios.get('https://still-ocean-78256.herokuapp.com/getPunks');
			const openseaDataApes = await axios.get('https://still-ocean-78256.herokuapp.com/getApes');
			const openseaDataAzuki = await axios.get('https://still-ocean-78256.herokuapp.com/getAzuki');
			setLists({
				punkListData: openseaData.data,
				azukiListData: openseaDataAzuki.data,
				apeListData: openseaDataApes.data
			});
			setpunkListData(openseaData.data);
			setapeListData(openseaDataApes.data);
			setazukiListData(openseaDataAzuki.data);
			// console.log(punkListData);
			// console.log(apeListData);
			// console.log(azukiListData);
		};

		return getMyNfts();
	}, []);

	return (
		<div className="app">
			<Header />
			{punkListData.length > 0 && (
				<React.Fragment>
					<Main punkListData={Lists[selectedList]} selectedPunk={selectedPunk} />
					<h1>CryptoPunks The First Collection</h1>
					<PunkList
						list="punkListData"
						punkListData={punkListData.slice(0, 6)}
						setselectedList={setselectedList}
						setselectedPunk={setselectedPunk}
					/>
					<h1>The Bored Ape Collection</h1>
					<PunkList
						list="apeListData"
						punkListData={apeListData}
						setselectedList={setselectedList}
						setselectedPunk={setselectedPunk}
					/>
					<h1>The Azuki Collection</h1>
					<PunkList
						list="azukiListData"
						punkListData={azukiListData}
						setselectedList={setselectedList}
						setselectedPunk={setselectedPunk}
					/>
					<h1>CryptoPunks The Second Collection</h1>
					<PunkList
						list="punkListData"
						punkListData={punkListData.slice(7)}
						setselectedList={setselectedList}
						setselectedPunk={setselectedPunk}
					/>
				</React.Fragment>
			)}
		</div>
	);
}

export default App;
