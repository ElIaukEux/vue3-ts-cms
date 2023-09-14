<template>
  <div class="my-form">
    <el-form ref="ruleFormRef" :label-width="props.labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="props.colLayout">
            <el-form-item :label="item.label" :style="props.itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="selectItem in item.options"
                    :key="selectItem.label"
                    :label="selectItem.label"
                    :value="selectItem.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import { IFormItem } from '@/base-ui/form'

const props = defineProps({
  itemStyle: {
    type: Object,
    default: () => {
      return { padding: '10px 40px' }
    }
  },
  labelWidth: {
    type: String
  },
  formItems: {
    type: Array as PropType<IFormItem[]>
  },
  colLayout: {
    type: Object,
    default: () => {
      return {
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      }
    }
  }
})

// console.log(props.labelWidth)

const ruleFormRef = ref<FormInstance>()

// const ruleForm = reactive({
//   pass: '',
//   checkPass: '',
//   age: ''
// })
</script>

<style scoped lang="less">
.my-form {
  padding: 20px 10px;
  background-color: #fff;
  :deep(el-select) {
    width: 100%;
  }
}
</style>
