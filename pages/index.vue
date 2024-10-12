<script setup lang="ts">
import { PEDAL_KINDS, PEDAL_PARAMETERS } from "~/constants/pedal";
import type { Pedal } from "~/types/pedal";

const newPedalKind = ref<string>("");

const pedals = ref<Pedal[]>([]);

const addPedal = () => {
  if (newPedalKind.value == "") {
    return;
  }

  pedals.value.push({
    id: crypto.randomUUID(),
    kind: newPedalKind.value,
    parameters: PEDAL_PARAMETERS[newPedalKind.value as keyof typeof PEDAL_PARAMETERS],
  });
};

const deletePedal = (pedalId: string) => {
  pedals.value = pedals.value.filter((pedal) => pedal.id != pedalId);
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-xl font-bold mb-3">エフェクターボードを編集</h1>
    <div class="join mb-4">
      <select class="select join-item" v-model="newPedalKind">
        <option value="">エフェクターを選択してください</option>
        <option v-for="(kind, label) in PEDAL_KINDS" :value="kind">{{ label }}</option>
      </select>
      <button class="btn join-item" v-on:click="addPedal" v-bind:disabled="newPedalKind == ''">
        エフェクターを追加
      </button>
    </div>
    <div class="flex flex-col space-y-2">
      <PedalAccordion
        v-for="(pedal, index) of pedals"
        :pedal="pedal"
        :position="index + 1"
        v-on:onDeletePedalButtonClick="deletePedal"
      />
    </div>
  </div>
</template>
