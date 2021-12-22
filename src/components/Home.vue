<template>
  <div class="container">
    <div class="is-flex is-justify-content-center ">
      <figure class="image is-128x128">
        <img class="is-rounded" src="../assets/mypic_1.png">
      </figure>
    </div>
    <div class="is-flex is-justify-content-center ">
      <p class="header">{{msg}}</p>
    </div>

    <div class="is-flex is-justify-content-center ">
      <p class="sub-text">
        View your GIF collection in the metaverse ✨
      </p>
    </div>

    <div  class="is-flex is-justify-content-center mt-5">
      <button v-if="!walletAddress" class='button is-primary' @click="connectWallet">Connet Wallet</button>
			<p class="subtitle has-text-white" v-else>Connected to 
				<span class="tag is-primary">{{walletAddress}}</span>
			</p>
    </div>
  </div>
</template> 
<script>
import { ref, onMounted, inject, computed } from 'vue';
import Swal from 'sweetalert2';
export default {
  props: {
        msg:String
  },
  setup(){
		const store = inject('store');
		const walletAddress = computed({
			get(){
				return store.state.walletAddress
			},
			set(val){
				store.methods.setWalletAddress(val)
			}
		})

		const checkWallet = async () =>{
			try{
				let {solana} = window;
				if(solana){

					if(solana.isPhantom){
						console.log("Solana wallet found!!")
						const response = await solana.connect({onlyIfTrusted: true})
						console.log('Connected with the wallet with public key', response.publicKey.toString())

						//Update the state
						store.methods.setWalletAddress(response.publicKey.toString())

					}else{
						Swal.fire('Solana Wallet is missing. Please install Phantom wallet to your chrome extension');
					} 
				}
			}catch(e){
				console.log(e)
			}
		}


		const connectWallet = async () => {
			try{
				let {solana} = window;

				if(solana){
					const response = await solana.connect();
					if(response) store.methods.setWalletAddress(response.publicKey.toString())
					else Swal.fire("Opps... something went wrong. Check the implementation in the connectWallet Method")
				}
			}catch(e){
				console.log(e)
			}
		}

		/** Lifecycle hook */
		onMounted(checkWallet);

		return {
			checkWallet,
			connectWallet,
			store,
			walletAddress
		}
  },
}
</script>