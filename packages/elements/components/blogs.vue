<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const props = withDefaults(defineProps<{
  query?: string
  limit?: number
}>(), {
  query: 'blog',
  limit: undefined,
})
dayjs.extend(relativeTime)
const isCn = useIsCn()

function fromNow(date: string | Date) {
  return dayjs(date).fromNow()
}

function createQueryContent(query: string, limit?: number) {
  return limit ? queryContent(query).limit(limit) : queryContent(query)
}

const query = await createQueryContent(props.query, props.limit).find()
</script>

<template>
  <section class="natural-blog-list">
    <p v-if="query.length === 0" class="natural-blog-list_empty">
      {{ isCn ? '暂无内容' : 'No content' }}
    </p>
    <ul v-else class="natural-blog-list_list">
      <li v-for="item in (query as any[])" :key="item._path" class="natural-blog-list_item">
        <nuxt-link :to="item._path" class="natural-blog-list_link">
          <div class="natural-blog-list_item_date">
            <span class="natural-blog-list_item_date_v">{{ item.date ? fromNow(item.date) : 'forgot' }}</span>
          </div>
          <h4 class="natural-blog-list_item_title">
            {{ item.title }}
          </h4>
          <p v-if="item.description" class="natural-blog-list_item_description">
            {{ item.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<style lang="ts">
css({
  '.natural-blog-list': {
    '.natural-blog-list_empty': {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      lineHeight: '1.5',
      color: '{text.secondary.static}',
      textAlign: 'center'
    },
    '.natural-blog-list_list': {
      '.natural-blog-list_item': {
        borderBottom: '1px dashed {text.secondary.static}',
        '&:last-child': {
          borderBottom: 'none',
        },
        '.natural-blog-list_link': {
          display: 'block',
          padding: '{space.md} 0',
          color: '{text.primary.static}',
        },
        '.natural-blog-list_item_title': {
          fontSize: '{fontSize.md}',
          fontWeight: 'bold',
        },
        '.natural-blog-list_item_description': {
          fontSize: '{fontSize.sm}',
          color: '{text.secondary.static}',
          marginTop: '{space.sm}',
          lineHeight: '1.5',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          '-webkit-box-orient': 'vertical',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
        },
        '.natural-blog-list_item_date': {
          fontSize: '{fontSize.sm}',
          color: '{text.secondary.static}',
          margin: '{space.sm} 0',
          position: 'relative',
          paddingLeft: 'calc({space.xs} * 3)',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '{space.xs}',
            height: '80%',
            top: 0,
            bottom: 0,
            left: 0,
            margin: 'auto 0',
            background: '{text.secondary.static}',
          }
        },
        '&:hover': {
          borderColor: '{text.primary.hover}',
          '.natural-blog-list_item_description': {
            color: '{text.secondary.hover}',
          },
          '.natural-blog-list_item_title': {
            color: '{text.primary.hover}',
          }
        }
      }
    }
  }
})
</style>
