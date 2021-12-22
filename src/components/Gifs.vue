<template>
	<div  v-if="connectedWallet" class="container">
		<div class="is-flex">
			<input class="input mr-4" type="text" placeholder="Enter Gif link">
			<button class="button is-primary">
				Submit Gif
			</button>
		</div>
		<div class="columns is-multiline is-variable is-0-mobile is-0-tablet is-1-desktop is-2-widescreen is-1-fullhd p-4">
			<div class="column is-one-third" v-for="(gif, i) in TEST_GIFS" :key="i">
				<div class="card">
					<div class="card-image">
						<figure class="image is-4by3">
							<img :src="gif">
						</figure>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {inject, computed} from 'vue';
	import store from '../store';
	export default{
		setup(){
			let store = inject('store')
			const connectedWallet = computed({
				get(){
					return store.state.walletAddress
				}
			})

			let TEST_GIFS = connectedWallet ? [
					'https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp',
					'https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g',
					'https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g',
					'https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp',
					'https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp',
					'https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g',
					'https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g',
					'https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp'
			] : []
			return{
				store,
				connectedWallet,
				TEST_GIFS
			}
		}
	}
</script>