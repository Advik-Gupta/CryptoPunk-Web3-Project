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
			const openseaData = await axios.get(
				'https://testnets-api.opensea.io/assets?asset_contract_address=0xb80409A31B53d3EF54dD9900eA84980cA2BE5eB5&order_direction=asc'
			);
			const openseaDataApes = await axios.get(
				'https://testnets-api.opensea.io/assets?asset_contract_address=0x4771fAB23a9ba5490bb126B1D6ef2c8300E300A8&order_direction=asc'
			);
			const openseaDataAzuki = await axios.get(
				'https://testnets-api.opensea.io/assets?asset_contract_address=0xe7a79e9438d94e06C261c8ef8Abcc27334e4d72E&order_direction=asc'
			);
			setLists({
				punkListData: openseaData.data.assets,
				azukiListData: openseaDataAzuki.data.assets,
				apeListData: openseaDataApes.data.assets
			});
			setpunkListData(openseaData.data.assets);
			setapeListData(openseaDataApes.data.assets);
			setazukiListData(openseaDataAzuki.data.assets);
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
