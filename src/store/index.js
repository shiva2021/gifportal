import {reactive, readonly} from 'vue';

const state = reactive({
	walletAddress: ''
})

const methods = {
	setWalletAddress(val) {
		state.walletAddress = val;
	}
}

export default {
	state: readonly(state),
	methods
}