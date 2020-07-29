<template>
	<div class="card column is-one-quarter">
		<div class="card-image">
			<figure class="image is-square">
				<img class="character-picture" :src="character.img" :alt="character.name">
				<figcaption class="is-overlay character-name">{{ character.name }}</figcaption>
			</figure>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ICharacter } from '~/models/character.interface';

export default Vue.extend({
	props: {
	  character: {
	    type: Object as () => ICharacter,
		},
	},
})
</script>

<style lang="scss" scoped>
	.character-name {
		display: none;
	}

	.card:hover {
	.character-picture {
		opacity: 0.5;
	}

	.character-name {
		display: initial;
		bottom: initial;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;
	}
	}
</style>
