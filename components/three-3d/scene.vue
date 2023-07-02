<script setup lang='ts'>
import * as THREE from 'three'
import { useResizeObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const loader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const el = ref<HTMLDivElement | null>(null)
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ alpha: true })

useResizeObserver(el, ([entry]) => {
  const { width, height } = entry.contentRect
  renderer.setSize(width, height)
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

onMounted(() => {
  const { width, height } = el.value!.getBoundingClientRect()
  renderer.setSize(width, height)
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
  camera.position.z = 5
  el.value?.appendChild(renderer.domElement)

  loader.setDRACOLoader(dracoLoader)

  loader.load('/paism.glb', (gltf) => {
  // glTF模型加载完成后的回调函数
    const model = gltf.scene
    // const cube = new THREE.Mesh(model, material)
    scene.add(model)
    //   scene.add(model);
  })

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <div ref="el" class="block h-full w-full">
  </div>
</template>

<style lang='scss'></style>
