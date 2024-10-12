<script setup lang="ts">
import { PEDAL_KINDS } from "~/constants/pedal";
import type { Pedal } from "~/types/pedal";

const { pedal } = defineProps<{ pedal: Pedal; position: number }>();
</script>

<template>
  <div class="collapse bg-base-200">
    <input type="radio" name="pedal-detail" />
    <div class="collapse-title text-xl font-medium">
      {{ `Pedal-${position} / ${PEDAL_KINDS[pedal.kind as keyof typeof PEDAL_KINDS]}` }}
    </div>
    <div class="collapse-content">
      <div v-for="(value, name) in pedal.parameters">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">{{ name }}</span>
          </div>
          <input type="text" class="input input-bordered w-full max-w-xs" />
        </label>
      </div>
      <button class="btn" v-on:click="$emit('onDeletePedalButtonClick', pedal.id)">delete</button>
    </div>
  </div>
</template>
